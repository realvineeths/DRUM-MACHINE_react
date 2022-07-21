import React from 'react'

class Box extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.playaudio=React.createRef();
  };
  
  handleClick(){
    // this.playaudio.current.play();  
    this.playaudio.current.play();
    const parent= document.getElementById(this.props.text);
    parent.classList.add('active');
    setTimeout(()=>{parent.classList.remove('active')},200);
    this.props.callback(this.props.keyid);
  }

  componentDidMount(){
    document.addEventListener("keydown",(e)=>{

      if(e.key.toUpperCase()===this.props.text)
      {
        this.playaudio.current.play();
        const parent= document.getElementById(this.props.text);
        parent.classList.add('active');
        setTimeout(()=>{parent.classList.remove('active')},200);
        this.props.callback(this.props.keyid);
        // console.log("id",this.props.keyid);
      }
    })
  }

  render(){
    return(
      <div id={this.props.text} className='drum-pad' onClick={this.handleClick}>
        {this.props.text}
        <audio ref={this.playaudio} id={this.props.text} src={this.props.audio} className="clip"/>
      </div>

    );
  }
}

export default Boxx