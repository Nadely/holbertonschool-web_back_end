#!/usr/bin/env python3
"""Write a function (do not create an async function, use the regular
function syntax to do this) task_wait_random that takes an integer max_delay
and returns a asyncio.Task."""

import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """returns a asyncio.Task"""

    async def wrapped_task():
        """async def pour une coroutine de wait_random"""
        return await wait_random(max_delay)

    """pour créer une tâche asynchrone basée sur la coroutine wrapped_task()"""
    return asyncio.create_task(wrapped_task())
