import {v4 as uuidv4 } from 'uuid'

const mockData=[
    {
        id: uuidv4(),
        title: 'To da', 
        task:[
            {
                id:uuidv4(),
                title: 'Learn javascript'
            },
            {
                id:uuidv4(),
                title: 'Learn react'
            },
            {
                id:uuidv4(),
                title: 'javascript'
            },
            {
                id:uuidv4(),
                title: 'Learn c++'
            },
            {
                id:uuidv4(),
                title: 'Learn c'
            },
            {
                id:uuidv4(),
                title: 'Learn type script'
            }
        ]

    },
    {
        id: uuidv4(),
        title: 'Progress', 
        task:[
            {
                id:uuidv4(),
                title: 'javascript'
            },
            {
                id:uuidv4(),
                title: 'node react'
            },
            {
                id:uuidv4(),
                title: 'node javascript'
            },
            {
                id:uuidv4(),
                title: 'lets Learn c++'
            },
            {
                id:uuidv4(),
                title: 'lets Learn c'
            },
            {
                id:uuidv4(),
                title: 'Learn type script angular'
            }
        ]

    },{
        id:uuidv4(),
        title: 'Completed', 
        task:[
            {
                id:uuidv4(),
                title: 'Kochadayan'
            },
            {
                id:uuidv4(),
                title: 'linga'
            },
            {
                id:uuidv4(),
                title: 'padayappa'
            },
            {
                id:uuidv4(),
                title: 'mersal'
            },
            {
                id:uuidv4(),
                title: 'vedhalam'
            },
            {
                id:uuidv4(),
                title: 'manymore'
            }
        ]

    } 
] 
export default mockData;