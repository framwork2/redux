export interface Signup
{
    _id?: string,
    email: string,
    password: string,
    name: string,
    confirmPassword: string,
    role?: string

}
export interface Login
{
    email: string,
    password: string,
    name?: string
}