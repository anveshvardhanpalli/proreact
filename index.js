const Button = props => {
  const {text, color} = props
  return <button className={color}>{text}</button>
}

const element = (
  <div className='main-container'>
    <div className='button-text-container'>
      <h1>Social Buttons</h1>
      <div className='button-container'>
        <Button color='like' text='Like' />
        <Button color='comment' text='Comment' />
        <Button color='share' text='Share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
