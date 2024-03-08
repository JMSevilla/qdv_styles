const hasSymbol = typeof Symbol === 'function' && Symbol.for;
export default hasSymbol ? Symbol.for('qdv.nested') : '__THEME_NESTED__';