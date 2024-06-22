'use client'

import { signup } from '@/app/signup/actions'
import { useFormStatus, useFormState } from 'react-dom'

const initialState = {
    message: '',
    errors: { username: '', password: '' }
}

export const SignupForm = () => {
    // const [state, action, pending] = useActionState(signup) //! NextJs 15

    const { pending } = useFormStatus()
    const [state, action] = useFormState(signup, initialState)

    return (
        <form action={action}>
            <input name='username' />
            {state?.errors?.username && <p>{state?.errors?.username}</p>}
            <input name='password' />
            {state?.errors?.password && <p>{state?.errors?.password}</p>}
            <button disabled={pending}>
                {pending ? 'submitting ...' : 'Signup'}
            </button>
        </form>
    )
}

