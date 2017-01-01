from time import sleep 
import json
import urllib2

while True:
    with open('pulse/prices.json', 'w') as outfile:
        response = urllib2.urlopen('https://blockchain.info/ticker')
        #data = json.dumps(response)
        data = json.load(response)
         
        json.dump(data, outfile)
    outfile.close()
    sleep(30)
 
