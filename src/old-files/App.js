class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <EggGroupWrapper
          eggGroups={eggGroups}
          currentlySelectedPokemonName={currentlySelectedPokemonName}
          cleanPokemonName={this.cleanPokemonName}
        />
      </div>
    );
  }
}
