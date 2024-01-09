#!/usr/bin/env python3

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    @staticmethod
    def index_range(page: int= 1, page_size: int= 10) -> tuple:
        """Task 0"""

        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start = (page - 1) * page_size
        end = start + page_size
        return (start, end)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """return the appropriate page of the dataset"""

        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = self.index_range(page, page_size)

        return self.dataset()[start:end]

    def get_hyper(self, page: int = 1, page_size:
                  int = 10) -> Dict[int, List[List]]:
        """returns a dictionary containing the following key-value pairs"""
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)
        next_page = (page + 1 if page + 1 <= total_pages else None)
        prev_page = (page - 1 if page - 1 >= 1 else None)

        return {'page_size': len(data),
                'page': page,
                'data': data,
                'next_page': next_page,
                'prev_page': prev_page,
                'total_pages': total_pages}
