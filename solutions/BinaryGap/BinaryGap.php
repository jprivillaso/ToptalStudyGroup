<?php
function solution($N) {
    // write your code in PHP5.5
    preg_match_all("/(?<=1)(0+)(?=1)/",decbin($N),$matches);
    if (!empty($matches[1]))
        return max(array_map('strlen',$matches[1]));
    else
        return 0;
}
