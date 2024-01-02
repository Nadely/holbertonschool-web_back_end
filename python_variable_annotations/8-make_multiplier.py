#!/usr/bin/env python3
"""Write a type-annotated function make_multiplier that takes a float
multiplier as argument and returns a function that multiplies a float
by multiplier."""

import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """return multiplier"""

    def multi(y: float):
        """return multiplier by one number"""

        return (multiplier * y)

    return multi
