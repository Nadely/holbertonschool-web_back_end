#!/usr/bin/env python3
"""
This module defines a coroutine called measure_runtime that measures the total
runtime of executing the async_comprehension coroutine four times in parallel
using asyncio.gather().
"""


import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Asynchronously measures the total runtime for executing
    async_comprehension four times in parallel.

    Returns:
        float: Total runtime in seconds.

    This coroutine measures the total runtime for executing the
    async_comprehension coroutine four times in parallel using
    asyncio.gather().
    """

    start_time = asyncio.get_event_loop().time()
    await asyncio.gather(*[async_comprehension() for _ in range(4)])
    end_time = asyncio.get_event_loop().time()

    total_measure_runtime = end_time - start_time
    return total_measure_runtime
