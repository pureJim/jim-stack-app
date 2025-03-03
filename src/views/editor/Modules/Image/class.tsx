import { DecoratorNode } from 'lexical';

class ButtonNode extends DecoratorNode<JSX.Element> {
  static getType(): string {
    return 'custom-button';
  }

  static clone(node: ButtonNode): ButtonNode {
    return new ButtonNode(node.__key);
  }

  createDOM(): HTMLElement {
    const button = document.createElement('button');
    button.className = 'custom-button';
    button.textContent = 'Click me';
    return button;
  }

  updateDOM(): boolean {
    return false;
  }

  decorate(): JSX.Element {
    return <button onClick={this.handleClick}>Click me</button>;
  }

  handleClick() {
    alert('Button clicked!');
  }
}
export default ButtonNode;
