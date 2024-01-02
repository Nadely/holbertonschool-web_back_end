#!/usr/bin/env python3

import typing

def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Write a type-annotated function make_multiplier that takes a float
    multiplier as argument and returns a function that multiplies a float
    by multiplier."""
    def multi(y: float):
        return (multiplier * y)

    return multi
