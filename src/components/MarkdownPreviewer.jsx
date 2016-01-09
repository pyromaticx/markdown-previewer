var sample = "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n"

var React = require('react');
var marked = require('marked');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: false,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true
});


var Previewer = React.createClass({
  getInitialState: function() {
    var sampleHTML = marked(sample);
    var sampleJSX = this.formatHTML(sampleHTML);
    return {
      textArea: sample,
      markup: sampleJSX
    }
  },
  formatHTML: function(html) {
    return {__html: html};
  },
  handleInputChange: function (e) {
    var value = e.target.value;

    var markup = marked(value);
    console.log(markup);
    var markupJSX = this.formatHTML(markup);
    this.setState({
      textArea: value,
      markup: markupJSX
    });
  },
  render: function() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-6 markdown'>
            <textarea onChange={this.handleInputChange} className='form-control' rows='30' value={this.state.textArea}/>
          </div>
          <div className='col-xs-6 previewBox'>
            <div dangerouslySetInnerHTML={this.state.markup}></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Previewer;
