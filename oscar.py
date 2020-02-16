
import json
import urllib.parse
from elasticsearch import Elasticsearch
import requests
from datetime import datetime



##################################################################################################
# Example source data
##################################################################################################

    # "data": [{
    #     "id": "a1N0UuS8YOEWPrR8S6AKVSA",
    #     "certifiedBy": {
    #         "id": "bA6"
    #     },
    #     "certifyDate": "2020-01-29T17:01:01.740Z",
    #     "certifyRemark": "",
    #     "driverRemark": "",
    #     "isSafeToOperate": true,
    #     "trailer": {
    #         "id": "aqoU8jOFgLUqdl2EXXIhHLw"
    #     },
    #     "dateTime": "2020-01-29T16:19:18.010Z",
    #     "driver": {
    #         "id": "bA6"
    #     },
    #     "logType": "PreTrip",
    #     "location": {
    #         "location": {
    #             "x": -86.39957,
    #             "y": 36.140415
    #         }
    #     },
    #     "defectList": {
    #         "children": [],
    #         "id": "b2759"
    #     },
    #     "version": "0000000000024a16"
    # }


log_entry = json.loads(open('data.json').read()) 

# print("object: " + json.dumps(log_entry["result"]["data"], indent=2))

log_entry_list=log_entry["result"]["data"]

cloud_id_var='class:dXMtd2VzdC0yLmF3cy5mb3VuZC5pbyQ5YjAxNTYzODk5MjA0MDI5YTY0ZDdlOTlhY2IzNjQ4YiRiYjY2ZDdlNDQxNDE0YWYyYTBkMjc4OWRjMWY1MjY1NQ=='
es = Elasticsearch(cloud_id=cloud_id_var, http_auth=('elastic','jPyiYAZvc7fBopoLhXEHbN5G'))
es.info()

# create an index in elasticsearch, ignore status code 400 (index already exists)
# es.indices.create(index='access-logs', ignore=400)

##################################################################################################
#Now put that data in ElasticCloud! 
##################################################################################################
for x in log_entry_list:
    print("object: " + json.dumps(x))
    es.index(index='oscargeo', body=x)

exit()



