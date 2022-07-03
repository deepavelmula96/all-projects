import React from 'react'

const ObjectMethods = () => {
    const hero = {
        name: 'Batman',
        city: 'Gotham'
    };
    console.log(Object.keys(hero))
    console.log(Object.values(hero))
    console.log(Object.entries(hero))
    return (
        <div>
            <dl>
                <dt>Object.Key(obj)</dt>
                <dd>it return the List of Keys of a Object in array     </dd>
                <dt>Object.values(obj)</dt>
                <dd>it return the List of values of a object in array </dd>
                <dt>Object.entries(obj)</dt>
                <dd>it return the List of key and value as a array in array</dd>
            </dl>
        </div>
    )
}

export default ObjectMethods