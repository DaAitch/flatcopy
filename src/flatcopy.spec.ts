///<reference path="../typings/globals/jasmine/index.d.ts"/>
import {flatcopy, flatarraycopy} from './flatcopy'

describe('flatcopy', () => {
    it('should copy the object flat', () => {
        const p1 = {
            name: "Jessica"
        };
        const p2 = {
            name: "Pete"
        };
        const persons = {
            id1: p1,
            id2: p2
        };

        const _persons = flatcopy(persons);

        // object should be a copy
        expect(_persons).not.toBe(persons);

        // values in it should not be a copy
        expect(_persons.id1).toBe(persons.id1);
        expect(_persons.id2).toBe(persons.id2);

        expect(_persons.id1.name).toBe("Jessica");
        expect(_persons.id2.name).toBe("Pete");
    });

    it('should create an empty object for non-objects', () => {
        expect(flatcopy(null)).toEqual({});
        expect(flatcopy(undefined)).toEqual({});

        expect(flatcopy(false)).toEqual({});
        expect(flatcopy(true)).toEqual({});

        expect(flatcopy(0)).toEqual({});
        expect(flatcopy(1)).toEqual({});

        expect(flatcopy(0.0)).toEqual({});
        expect(flatcopy(1.0)).toEqual({});

        expect(flatcopy('')).toEqual({});
        expect(flatcopy('Pete')).toEqual({});

        expect(flatcopy([])).toEqual({});
        expect(flatcopy(['Pete', 'Jessica'])).toEqual({});
    });
});

describe('flatarraycopy', () => {
    it('should copy the array flat', () => {
        const a = [ // array
            'Pete',
            'Jessica'
        ];
        const o = { // obj
            Pete: true,
            Jessica: false
        };
        const arr = [a, o];

        const _arr = flatarraycopy(arr);

        expect(_arr).not.toBe(arr);

        expect(_arr[0]).toBe(a);
        expect(_arr[1]).toBe(o);
    });

    it('should create an empty array for non-arrays', () => {
        expect(flatarraycopy(<any>null)).toEqual([]);
        expect(flatarraycopy(<any>undefined)).toEqual([]);

        expect(flatarraycopy(<any>false)).toEqual([]);
        expect(flatarraycopy(<any>true)).toEqual([]);

        expect(flatarraycopy(<any>0)).toEqual([]);
        expect(flatarraycopy(<any>1)).toEqual([]);

        expect(flatarraycopy(<any>0.0)).toEqual([]);
        expect(flatarraycopy(<any>1.0)).toEqual([]);

        expect(flatarraycopy(<any>'')).toEqual([]);
        expect(flatarraycopy(<any>'Pete')).toEqual([]);

        expect(flatarraycopy(<any>{})).toEqual([]);
        expect(flatarraycopy(<any>{Pete: true, Jessica: false})).toEqual([]);
    });
});