///<reference path="../typings/globals/lodash/index.d.ts"/>
import * as _ from 'lodash';

export function flatcopy<T>(x: T): T {
    if (!_.isObject(x) || _.isArray(x))
        return <T>{};

    return <T>_.assign({}, x);
}

export function flatarraycopy<T>(x: T[]): T[] {
    if (!_.isArray(x))
        return <T[]>[];

    return <T[]>_.slice(x);
}