class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <LogoWrapperSmallScreen
            currentlySelectedPokemonName={currentlySelectedPokemonName}
          />
          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <div className="row align-items-center">
              <PokemonSelector />
            </div>
          </div>
          <LogoWrapperLargeScreen
            currentlySelectedPokemonName={currentlySelectedPokemonName}
          />
          <EggGroupWrapper
            eggGroups={eggGroups}
            currentlySelectedPokemonName={currentlySelectedPokemonName}
            cleanPokemonName={this.cleanPokemonName}
          />
        </div>
      </div>
    );
  }
}
