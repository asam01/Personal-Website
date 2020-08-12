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
    };
}

export const sectionHeader = {
    textIndent: '10%',
    color: 'white'
}

export const list = {
    marginLeft: '12%',
    marginRight: '12%',
    color: 'white'
}

export const picture = (margin) => {
    return {
        width: '3%',
        height: '3%',
        marginLeft: margin
    }
}