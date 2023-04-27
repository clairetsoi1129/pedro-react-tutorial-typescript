import React from 'react'
import {Person, Country} from "../components/Person";

export function Lesson13() {
    const getAge = (name: string): number => {
        return 9;
        }
    return (
        <div>
            <Person 
                    name="Peter"
                    email="pedro@gmail.com"
                    age={21}
                    isMarried={true}
                    friends={["jessica","jake"]}
                    country={Country.Brazil}
                />
        </div>
    );
};
