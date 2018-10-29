import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { queryProcess } from "../../actions/DetailProcessAction";
import {
  changeDialogForm,
  removeInteressado,
  addInteressado,
  changeDescricao,
  changeAssunto,
  saveProcess
} from "../../actions/DialogFormAction";
import { setActivePage } from "../../actions/RouterAction";

class FormDialog extends React.Component {
  state = {
    newInteressado: ""
  };
  handleClickOpen = () => {
    this.props.changeDialogForm(true);
  };

  handleClose = () => {
    this.props.changeDialogForm(false);
  };
  _sendForm() {
    if (this.props.assunto && this.props.descricao && this.props.interessados) {
      if (this.props.operation === "edicao") {
        alert(
          "Como não o método PUT não está habilitado na rota /processo e no documento do desafio não tem o endpoint de edição, não o fiz."
        );
      } else {
        this.props.saveProcess({
          descricao: this.props.descricao,
          assunto: this.props.assunto,
          interessados: this.props.interessados
        });
        this.handleClose();
        this.props.setActivePage("search");
      }
    }
  }
  render() {
    return (
      <div>
        <form id="formPost" method="post" onSubmit={e => this._sendForm(e)}>
          <Dialog open={this.props.openDialogForm} onClose={this.handleClose}>
            <DialogTitle>Cadastro de Processo</DialogTitle>

            <DialogContent>
              <DialogContentText />
              <TextField
                autoFocus
                value={this.props.assunto}
                onChange={e => {
                  this.props.changeAssunto(e.target.value);
                }}
                id="assunto"
                label="Assunto"
                type="text"
              />
            </DialogContent>
            <DialogContent>
              <ul>
                {this.props.interessados.map(res => (
                  <li>{res}</li>
                ))}
              </ul>
            </DialogContent>
            <DialogContent>
              <TextField
                autoFocus
                id="interessado"
                label="Interessado"
                type="text"
                value={this.state.newInteressado}
                onChange={e => {
                  this.setState({ newInteressado: e.target.value });
                }}
              />
              <Button
                variant="outlined"
                onClick={() => {
                  this.props.addInteressado([
                    ...this.props.interessados,
                    this.state.newInteressado
                  ]);
                }}
                color="default"
              >
                +
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  this.props.removeInteressado(
                    this.props.interessados.slice(0, 0)
                  );
                }}
                color="default"
              >
                -
              </Button>
            </DialogContent>
            <DialogContent>
              <TextField
                autoFocus
                multiline
                rows={10}
                value={this.props.descricao}
                onChange={e => {
                  this.props.changeDescricao(e.target.value);
                }}
                id="descricao"
                label="Descrição"
                type="text"
              />
            </DialogContent>
            <DialogContent>
              <p>{this.props.message}</p>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                onClick={this.handleClose}
                color="default"
              >
                Cancel
              </Button>

              <Button
                variant="outlined"
                onClick={() => this._sendForm()}
                color="primary"
              >
                Salvar
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  openDialogForm: state.DialogFormReducer.open,
  interessados: state.DialogFormReducer.interessados,
  assunto: state.DialogFormReducer.assunto,
  descricao: state.DialogFormReducer.descricao,
  operation: state.DialogFormReducer.operation
});
const mapDispatchToProps = {
  changeDialogForm,
  addInteressado,
  removeInteressado,
  changeDescricao,
  changeAssunto,
  saveProcess,
  queryProcess,
  setActivePage
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog);
