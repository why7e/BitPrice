from time import sleep 
import json
import urllib2

while True:
    with open('eurval.json', 'w') as outfile:
        response = urllib2.urlopen('https://api.cryptonator.com/api/ticker/btc-eur')
        #data = json.dumps(response)
        data = json.load(response)
         
        json.dump(data, outfile)
    outfile.close()
    sleep(30)