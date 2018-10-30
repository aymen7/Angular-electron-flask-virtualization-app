from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import libvirt
import os
import json
# import the minidom module and that's for the xmlPArsing
from xml.dom import minidom

app = Flask(__name__)
api = Api(app)

# declare a conn variable 
conn = libvirt.open('qemu:///system')

class host(Resource):
    def get(self):
        return jsonify({'hostName':conn.getHostname()})

class vmsList(Resource):
    def get(self):
        # here we gonna put the json response object
        vms = {}
        # listDefinedDomains() gives you the define domains that currently are not running
        # create a count var       
        i = 1
        allDomains = conn.listDefinedDomains();
        for stopDomain in allDomains:
            xmldoc = minidom.parse('/../../../../../../../../../../etc/libvirt/qemu/'+stopDomain+'.xml')
            mac = xmldoc.getElementsByTagName('mac')[0].attributes['address'].value
            vms.update({ 'vm'+str(i): {'name': stopDomain, 'status': 'stopped', 'MAC': mac, 'ip': 'N/A'} })
            i+=1

        domainIDs = conn.listDomainsID()
        runningDomainList = []
        for domainID in domainIDs:
            ip = ''
            domain = conn.lookupByID(domainID)
            runningDomainList.append(domain.name())
        if (len(runningDomainList)>0):
            for domain in runningDomainList:
                xmldoc = minidom.parse('/../../../../../../../../../../etc/libvirt/qemu/'+domain+'.xml')
                mac = xmldoc.getElementsByTagName('mac')[0].attributes['address'].value
                for lease in conn.networkLookupByName("default").DHCPLeases():
                    if lease['mac'] == mac:
                        ip = lease['ipaddr']
                vms.update({ 'vm'+str(i): {'name': domain, 'status': 'running', 'MAC': mac, 'ip': ip} })
                i+=1

        '''    
            # listDomainsID() gives you the define domains that currently are running
            domainIDs = conn.listDomainsID()
            for domainId in domainIDs:
                domain = conn.lookupByID(domainId)
                vms.update({ i: {'name': str(domain.name), 'status': 'running'} })
        '''
        '''
            domains = conn.listAllDomains(0)
            for domain in domains:
                vms.update({ i: {'name': domain.name(), 'status': 'running'} })        
                i+1
        '''    

        # vms1 = conn.networkLookupByName("default").DHCPLeases()
        #return jsonify({'listAllDomains': vms})
        vms1 = json.dumps(vms)
        vms1 = json.loads(vms1)
        return vms1
        

api.add_resource(host, '/')
api.add_resource(vmsList, '/vms')

if __name__ == '__main__':
    app.run(debug=True)        