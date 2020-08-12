export const body = {
    fontFamily: 'Didact Gothic',
    justifyContent: 'center'
}

export const header = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px'
}

export const text = {
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export const section = (color) => {
    return {
        backgroundColor: color,
        marginBottom: '-1.409%' // remove white space between sections
    };
}

export const sectionHeader = {
    textIndent: '10%'
}

export const list = {
    marginLeft: '12%'
}