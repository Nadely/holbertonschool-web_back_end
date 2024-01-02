#!/usr/bin/env python3
"""Write a coroutine called async_generator that takes no arguments.
The coroutine will loop 10 times, each time asynchronously wait 1 second,
then yield a random number between 0 and 10."""


import asyncio
import random
from typing import AsyncIterator


async def async_generator() -> AsyncIterator[float]:
    """
    Asynchronous generator that yields a random number between 0 and 10 every
    4 second, for a total of 10 times.

    Yields:
        float: A random floating-point number between 0 and 10.

    Example:
        async for num in async_generator():
            print(num)
    """

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
