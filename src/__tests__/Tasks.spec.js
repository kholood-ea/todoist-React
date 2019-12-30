import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Tasks } from "../components/Tasks";
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

jest.mock('../hooks', () => ({
    useTasks: () => ({
        tasks: [{
            id: '9LMDbXjEbTYgLKPJc72V',
            archived: false,
            date: '',
            projectid: '1',
            task: 'piano lessons',
            userid: '112233',

        }


        ]

    })

}))

beforeEach(cleanup);

describe('<Tasks/>', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })
    it('renders tasks', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => 'INBOX'),
            selectedProject: 'INBOX'
        }))
        const { queryByTestId } = render(<Tasks />)
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox')
    });

    it('renders tasks with a project title', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => '1'),
            selectedProject: '1'
        }))
        const { queryByTestId } = render(<Tasks />)
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('🎶Music')
    });
    it('renders tasks with a collated title', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => 'INBOX'),
            selectedProject: 'INBOX'
        }))
        const { queryByTestId } = render(<Tasks />)
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox')
    });
});