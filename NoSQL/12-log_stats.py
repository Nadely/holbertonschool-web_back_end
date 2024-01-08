#!/usr/bin/env python3
"""Write a Python script that provides some stats about
Nginx logs stored in MongoDB"""

from pymongo import MongoClient


# Connect to MongoDB
client = MongoClient('localhost', 27017)
db = client['logs']
collection = db['nginx']

# Count total number of documents
total_logs = collection.count_documents({})

print(f"{total_logs} logs")

# Count documents for method
http_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
print("Methods:")
for method in http_methods:
    count = collection.count_documents({"method": method})
    print(f"\tmethod {method}: {count}")

# Count documents with method=GET and path=/status
count_status = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{count_status} status check")

# Close MongoDB connection
client.close()
