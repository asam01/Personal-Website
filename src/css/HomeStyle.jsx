export const body = {
    fontFamily: 'Didact Gothic',
    justifyContent: 'center'
}

export const header = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px'
}

export const page = {
    backgroundColor: 'honeydew'
}

export const text = {
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
}

export const section = (color) => {
    const col = 'linear-gradient(to bottom right, turquoise,' + color + ')';
    return {
        background: col,
        backgroundColor: color,
        padding: '15px'
    };
}

export const sectionHeader = {
    textIndent: '3%',
    color: 'white'
}

export const list = {
    marginLeft: '5%',
    marginRight: '5%',
    color: 'black',
    padding: '15px'
}
