import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import { AddProject } from "../components/AddProject";
import { useSelectedProjectValue } from "../context";

jest.mock('../context', () => ({

    useSelectedProjectValue: jest.fn(),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {

                name: '🎶Music',
                projectid: '1',
                userid: '112233',
                docId: 'tJsn2DIFpoLHVLsAzxgr'
            },
            {

                name: '🚗1st Project',
                projectid: '2',
                userid: '112233',
                docId: 'iPvaFZnvn3GCq3RlI0OY'
            },
            {

                name: '🎅2nd Project',
                projectid: '3',
                userid: '112233',
                docId: 'ccEJRxwfE8IRnRhdfgfE'
            },
            {

                name: '️⚽️3rd Project',
                projectid: '4',
                userid: '112233',
                docId: 'VaFMh1qLLghW8k9CBvkN'
            },
            {

                name: '*Doctors appointments',
                projectid: '-LwtDixd------------',
                userid: '112233',
                docId: 'mMYNsZwzp5jnOB9O1BUJ'
            }
        ]
    }))

}))
jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('I am resolved'))
            }))

        }))
    }
}))

beforeEach(cleanup);

describe('<AddProject/>', () => {
    describe('Success', () => {
        it('renders <AddProject/>', () => {
            const { queryByTestId } = render(<AddProject shouldShow />)
            expect(queryByTestId('add-project')).toBeTruthy()
        });

        it('hides the project overlay when cancelled using onClick', () => {
            const { queryByTestId, getByText } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();

            fireEvent.click(getByText('Cancel'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });
        it('hides the project overlay when cancelled using onKeyDown', () => {
            const { queryByTestId, getByText } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();

            fireEvent.keyDown(getByText('Cancel'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });
        it('hides the project overlay using onClick singlar and reverse action', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();

            fireEvent.click(queryByTestId('add-project-action'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });
        it('hides the project overlay using onKeyDown singlar and reverse action', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('add-project-action'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });

    });

});
// it('renders <AddProject /> and adds a project using onClick', () => {
//     const { queryByTestId } = render(<AddProject shouldShow />);
//     expect(queryByTestId('add-project')).toBeTruthy();

//     fireEvent.change(queryByTestId('project-name'), {
//         target: { value: 'Best project in the world!' }
//     })

//     expect(queryByTestId('project-name').value).toBe(
//         'Best project in the world!'
//     );
//     fireEvent.click(queryByTestId('add-project-submit'));
// });
// it('renders <AddProject /> and adds a project using onKeyDown', () => {
//     const { queryByTestId } = render(<AddProject shouldShow />);
//     expect(queryByTestId('add-project')).toBeTruthy();

//     fireEvent.change(queryByTestId('project-name'), {
//         target: { value: 'Best project in the world!' }
//     })

//     expect(queryByTestId('project-name').value).toBe(
//         'Best project in the world!'
//     );
//     fireEvent.keyDown(queryByTestId('add-project-submit'));
// });