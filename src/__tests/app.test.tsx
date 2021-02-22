import React from 'react'
import renderer from 'react-test-renderer'
import { App } from '../App'


describe('Render App', () => {
    it('Render App', () => {
        const tree = renderer
            .create(
                <App />
            ).toJSON()

            expect(tree).toMatchSnapshot()
    })
})