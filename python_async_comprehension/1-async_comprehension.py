#!/usr/bin/env python3
"""
This module defines an asynchronous comprehension coroutine that collects 10
random floating-point numbers using an asynchronous comprehension over the
async_generator coroutine.
"""

import typing
from typing import List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronously collects 10 random floating-point numbers using an
    asynchronous comprehension over async_generator.

    Returns:
        List[float]: A list containing 10 random floating-point numbers.

    The coroutine collects 10 random numbers by iterating asynchronously over
    the async_generator coroutine.
    """

    random_numbers = [number async for number in async_generator()]
    return random_numbers[:10]
