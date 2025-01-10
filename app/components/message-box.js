import Component from '@glimmer/component';
export default class MessageBox extends Component {
    substring = (string, start, end) => string.substring(start, end);
}