import Button from "@/components/ui/Button";

export default function Home() {
    return (
        <main className='container'>
            <h1 className='text-center'>NextJS Application ...</h1>
            <Button label='Button' type='primary' />
            <button className='btn btn-primary m-2'>Button</button>
            <button className='btn btn-secondary m-2'>Button</button>
            <button className='btn btn-danger m-2'>Button</button>
        </main>
    )
}
