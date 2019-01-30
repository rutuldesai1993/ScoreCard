import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { Slider } from 'react-native-elements';
// import { updateroi } from '../actions/updateroi';
import { Card, CardSection, NonEditableTextCenter } from './common';

export default class ScoreCard extends Component {
  constructor(props) {
        super(props);
        this.state = {
            visible: false,
            min: '28.3',
            rie: '1.04',
            coi: '20',
            rpy: '',
            fpy: '',
            gtm: 0,
            gql: 0,
            ghc1: 0,
            ghc2: 0,
            gfx: 0,
            rpm: '',
            ias: '',
            ish: '',
            das: '',
            ds: '',
            aar: '',
            roi: 0,
            por: '0.036',
            hpw: '0.16',
            tpr: '0.18',

        };
    }
    handleRIE = (value) => {
      this.setState({ rie: value });
      this.gtm = this.rie * this.rpy;
      this.setState({ gtm })
    }
    handleRPY = (value) => {
      this.setState({ rpy: value });
    }
    handleAAR = (value) => {
      this.setState({ aar: value });
    }
    handleFPY = (value) => {
      this.setState({ fpy: value });
    }
    handleDAS = (value) => {
      this.setState({ das: value });
    }
    handleDS = (value) => {
      this.setState({ ds: value });
    }
    handleIAS = (value) => {
      this.setState({ ias: value });
    }
    handleRPM = (value) => {
      this.setState({ rpm: value });
    }
    handleISH = (value) => {
      this.setState({ ish: value });
    }

  render() {
    return (
      <ScrollView>
      <Card>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue gains from accelerated time to market of new functionality(GTM)"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue Per Year: "
        />
        <NumericInput
        value={this.state.rpy}
        onChange={this.handleRPY}
        />
        </CardSection>
        <CardSection>
        <NumericInput
        label="Revenue Increase Estimate: "
        value={this.state.rie}
        onChange={this.handleRIE}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GTM:"
        value={this.state.gtm}
        />
        </CardSection>
      <Text style={styles.errorTextStyle} />
        <CardSection>
            <NonEditableTextCenter
            label="Gain from flexibility in the IT environment (GFX)"
            />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Application Annual Revenue: "
        />
        <NumericInput
        value={this.state.aar}
        onChange={this.handleAAR}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="72 % Avg TCO reduction x5 % cost of IT as percentage of revenue: 0.036"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GFX:"
        value={this.state.gfx}
        />
        </CardSection>
        <Text style={styles.errorTextStyle} />
        <CardSection>
            <NonEditableTextCenter
label="Gains from enhanced IT team productivity and cost reduction of IT headcount waste(GHC)"
            />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="IT average salary: "
        />
        <NumericInput
        value={this.state.ias}
        onChange={this.handleIAS}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="7.2 / 45 saving hours per week / total hours: 0.16"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="IT staff headcount: "
        />
        <NumericInput
        value={this.state.ish}
        onChange={this.handleISH}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC (IT Ops):"
        value={this.state.ghc1}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Developer average salary: "
        />
        <NumericInput
        value={this.state.das}
        onChange={this.handleDAS}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Dev staff: "
        />
        <NumericInput
        value={this.state.ds}
        onChange={this.handleDS}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="60 % TRICD  x 75 % TSRCA x 40 % TDSPR: 0.18 minutes"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC (Developers):"
        value={this.state.ghc2}
        />
        </CardSection>

        <Text style={styles.errorTextStyle} />
        <CardSection>
            <NonEditableTextCenter
label="Gains from cost reduction of application failures resulting from increased quality(GQL)"
            />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Failures Per Year: "
        />
        <NumericInput
        value={this.state.fpy}
        onChange={this.handleFPY}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Average Minutes to recover difference: "
        value={this.state.min}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Revenue per minute: "
        />
        <NumericInput
        value={this.state.rpm}
        onChange={this.handleRPM}
        />
        <NonEditableTextCenter
        label=" Minutes"
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GQL:"
        value={this.state.gql}
        />
        </CardSection>
        <Text style={styles.errorTextStyle} />
        <CardSection>
        <NonEditableTextCenter
        label="Return of Investment"
        value={this.state.roi}
        />
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="Cost of Investment:"
        value={this.state.coi}
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC(Developers):"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GTM:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GHC(IT Ops):"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GQL:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="GFX:"
        />
        </CardSection>
        <CardSection>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider />
        </View>
        </CardSection>
        <CardSection>
        <NonEditableTextCenter
        label="ROI: 0.0"
        />
        </CardSection>
      </Card>
      </ScrollView>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  }
};
