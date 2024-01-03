#!/usr/bin/env python3
"""
Module to provide an async routine called wait_n that takes in 2 int arguments
(in this order): n and max_delay. This module spawns wait_random n times with
the specified max_delay.
"""

import asyncio
import typing


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    Perform asynchronous waiting using wait_random.

    Args:
        n (int): Number of times to call wait_random.
        max_delay (int): Maximum delay value for each wait_random call.

    Returns:
        typing.List[float]: List of delays in ascending order.

    Note:
        This function uses asyncio.gather to concurrently run wait_random n
        times.
        The list of delays is returned in ascending order without using sort()
        due to concurrency.
    """

    delay_n = await asyncio.gather(*[wait_random(max_delay) for _ in range(n)])

    return sorted(delay_n)
