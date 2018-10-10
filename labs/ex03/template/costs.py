# -*- coding: utf-8 -*-
"""Function used to compute the loss."""

import numpy as np

def calculate_mse(e):
    """Calculate the mse for vector e."""
    return 1/2*np.mean(e**2)


def calculate_mae(e):
    """Calculate the mae for vector e."""
    return np.mean(np.abs(e))


def compute_mse(y, tx, w):
    e = y - tx.dot(w)
    return calculate_mse(e)

def compute_mae(y, tx, w):
    e = y - tx.dot(w)
    return calculate_mse(e)
