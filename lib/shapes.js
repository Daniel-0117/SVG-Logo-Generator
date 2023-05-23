//Should define a shape as a constructor
class shape {
  constructor() {
    this.color = "";
  }


//Necessary to have shape class take in setThatColor function
setThatColor(BackColor) {
  this.color = BackColor;

  }
}

class Cir extends shape {
  render () {
    return '<circle cx="25" cy="75" r="20" fill="${this.color}"/> '
  }
}

class Squ extends shape {
  render () {
    return '<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"/>'
  }
}

class Tri extends shape {
  render () {
    return '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>'
  }
}