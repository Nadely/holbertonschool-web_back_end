#!/usr/bin/env python3
"""write an async routine called wait_n that takes in 2 int arguments
(in this order): n and max_delay. You will spawn wait_random n times with the
specified max_delay."""

import asyncio
from asyncio import create_task, as_completed
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """wait_n should return the list of all the delays (float values).
    The list of the delays should be in ascending order without using sort()
    because of concurrency."""

    tasks = [create_task(wait_random(max_delay)) for _ in range(n)]

    delays_n = []
    for task in as_completed(tasks):
        delays_n.append(await task)

    return delays_n
