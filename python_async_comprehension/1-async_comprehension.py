#!/usr/bin/env python3
""" write a coroutine called async_comprehension that takes no arguments.
The coroutine will collect 10 random numbers using an async comprehensing
over async_generator, then return the 10 random numbers."""


import typing


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """ return the 10 random numbers"""

    random_numbers = [number async for number in async_generator()]
    return random_numbers[:10]