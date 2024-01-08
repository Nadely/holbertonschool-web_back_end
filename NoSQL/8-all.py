#!/usr/bin/env python3
"""Write a Python function that lists all documents in a collection"""


def list_all(mongo_collection):
    """Return an empty list if no document in the collection"""

    all_documents = []

    for documents in mongo_collection.find():
        all_documents.append(documents)

    return all_documents
