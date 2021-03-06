import React, { Component } from "react";
import "./technology-sidebar.scss";
import TechnologyTag from "../technology-tag/technology-tag";
import { doesArrayContainItem } from "../../../helpers";

class TechnologySidebar extends Component {
  determineIfTagIsActiveFilter = tagId => {
    return doesArrayContainItem(this.props.techFilters, tagId);
  };

  determineIfTagIsDisabled = techId => {
    return !doesArrayContainItem(this.props.activeTechnologies, techId);
  };

  renderTechnologyTags = technologies => {
    return technologies.map(technology => {
      return (
        <TechnologyTag
          technology={technology}
          key={technology._id}
          isActiveFilter={this.determineIfTagIsActiveFilter(technology._id)}
          isDisabled={this.determineIfTagIsDisabled(technology._id)}
          handleTechFilter={techId => this.props.handleTechFilter(techId)}
        />
      );
    });
  };

  render() {
    const { technologies } = this.props;

    return (
      <aside className="technology-sidebar">
        <h2>Tech</h2>
        <div className="tag-container">
          {this.renderTechnologyTags(technologies)}
        </div>
      </aside>
    );
  }
}

export default TechnologySidebar;
