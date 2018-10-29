from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import libvirt
import os
app = Flask(__name__)
api = Api(app)

# declare a conn variable 
conn = libvirt.open('qemu:///system')
class vmsList(Resource):
    def get(self):
        # here we gonna put the json response object
        vms = {}
        # listDefinedDomains() gives you the define domains that currently are not running
        # create a count var       
        i = 1
        allDomains = conn.listDefinedDomains();
        domainIDs = conn.listDomainsID()
        if len(domainIDs) != 0:
            for domainID in domainIDs:
                domain = conn.lookupByID(domainID)
                allDomains.append(domain.name())
        for domain in allDomains:
            vms.update({ i: {'name': domain, 'status': 'null'} })
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
        return jsonify({'listAllDomains': vms})

api.add_resource(vmsList, '/vms')

if __name__ == '__main__':
    app.run(debug=True)        