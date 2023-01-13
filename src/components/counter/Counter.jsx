import './counter.module.scss'

const Counter = () => {
    return (
    <div className="counter">
        <button className='counter__decrement'></button>
        <label className="counter__wrapper">
            <input type="text" inputMode="numeric"/>
        </label>
        <button className='counter__increment'></button>
    </div>
    )
}
export default Counter;