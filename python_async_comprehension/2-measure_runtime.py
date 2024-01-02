#!/usr/bin/env python3
"""write a measure_runtime coroutine that will execute async_comprehension
four times in parallel using asyncio.gather."""


import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """measure_runtime should measure the total runtime and return it."""
