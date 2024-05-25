import React from 'react'
import { data, data1 } from '../App'
import { useContext } from 'react'


const Com_C = () => {
    const FirstName = useContext(data)
    const Age = useContext(data1)

    return (
        <div>
            <h1>This is Com C</h1>
            {FirstName}
            {Age}

            <data.Consumer>
                {
                    (name) => {
                        return (
                            <data1.Consumer>{
                                (Age) => {
                                    return (
                                        <span className="bg-red-500"><br />{name} {Age}</span>
                                    )
                                }
                            }
                            </data1.Consumer>
                        )
                    }
                }
            </data.Consumer>
            
        </div>
    )
}

export default Com_C
