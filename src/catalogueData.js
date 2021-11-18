/**
 * CoE5 Browser - catalogueData.js
 * @author Zac Belado
 */

let catalogueData = {

      'Area Of Effects': {
        filepath: 'AreaofEffects.json',
        rendered: false,
        loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Battle Maps': {
        filepath: 'BattleMaps.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Class Numbers': {
        filepath: 'ClassNumbers.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Damage Types': {
        filepath: 'DamageTypes.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Flying Modes': {
        filepath: 'FlyModes.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Flying Sprites': {
        filepath: 'FlySprite.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Gem Income Bitmask': {
        filepath: 'GemIncomeBitmask.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Magic Item Types': {
        filepath: 'MagicItemTypes.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Magic Schools': {
        filepath: 'MagicSchools.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Name Types': {
        filepath: 'NameTypes.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Negative Terrain Types': {
        filepath: 'NegativeTerrainTypes.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Objectives': {
        filepath: 'Objectives.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Plane Numbers': {
        filepath: 'PlaneNumbers.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Player Numbers': {
        filepath: 'PlayerNumbers.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Resource Types': {
        filepath: 'ResourceTypes.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Ritual School Types': {
        filepath: 'RitualSchoolType.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Sound Effects': {
        filepath: 'SoundEffects.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Special Afflications bitmask': {
        filepath: 'SpecialAfflications.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Special Benefits bitmask': {
        filepath: 'SpecialBenefits.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Target Ranks': {
        filepath: 'TargetRanks.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'Visual Effects': {
        filepath: 'VisualEffects.json',
        rendered: false,
		loaded:false,
        html: '',
        json: '',
        template: '#modTable',
        modalTemplate:'',
        tableOptions: ''
      },
      'modding':{
          filepath: 'modcommandsv5.json',
          rendered: false,
		  loaded:false,
          html: '',
          json: '',
          template:'#modTableTemplate', 
          modalTemplate: '#moddingModalTemplate',
          tableOptions:[{ 'orderable': false, 'targets': [3,4,5] }]
      }, 
      'rituals':{
          filepath:'Rituals_processedv10.json',
          rendered: false,
		  loaded:false,
          html: '',
          json: '',
          template:'#ritualTemplate', 
          modalTemplate: '#ritualsModalTemplate',
          tableOptions:[{ 'orderable': false, 'targets': [5] }, { 'width': '25%', 'targets': [3]}]
      },
      'ritualsummons': {
          filepath:'ritual_summoning.html',
          rendered: false,
          loaded:false,
          html: '',
          json: '',
          template:'', 
          modalTemplate: '',
          tableOptions:''
      },
      'spells':{
          filepath:'Spells.json',
          rendered: false,
		  loaded:false,
          html: '',
          json: '',
          template:'#spellTemplate', 
          modalTemplate: '#scriptsModalTemplate',
          tableOptions:[{ 'orderable': false, 'targets': [5,6] }]
      }
    };

const  tableObj = { tables: [
        {
          path: 'AreaofEffects.json',
          name: 'Area Of Effects'
        },
        {
          path: 'BattleMaps.json',
          name: 'Battle Maps'
        },
        {
          path: 'ClassNumbers.json',
          name: 'Class Numbers'
        },
        {
          path: 'DamageTypes.json',
          name: 'Damage Types'
        },
        { path: 'FlyModes.json', name: 'Flying Modes' },
        {
          path: 'FlySprite.json',
          name: 'Flying Sprites'
        },
        {
          path: 'GemIncomeBitmask.json',
          name: 'Gem Income Bitmask'
        },
        {
          path: 'MagicItemTypes.json',
          name: 'Magic Item Types'
        },
        {
          path: 'MagicSchools.json',
          name: 'Magic Schools'
        },
        { path: 'NameTypes.json', name: 'Name Types' },
        {
          path: 'NegativeTerrainTypes.json',
          name: 'Negative Terrain Types'
        },
        { path: 'Objectives.json', name: 'Objectives' },
        {
          path: 'PlaneNumbers.json',
          name: 'Plane Numbers'
        },
        {
          path: 'PlayerNumbers.json',
          name: 'Player Numbers'
        },
        {
          path: 'ResourceTypes.json',
          name: 'Resource Types'
        },
        {
          path: 'RitualSchoolType.json',
          name: 'Ritual School Types'
        },
        {
          path: 'SoundEffects.json',
          name: 'Sound Effects'
        },
        {
          path: 'SpecialAfflications.json',
          name: 'Special Afflications bitmask'
        },
        {
          path: 'SpecialBenefits.json',
          name: 'Special Benefits bitmask'
        },
        {
          path: 'TargetRanks.json',
          name: 'Target Ranks'
        },
        {
          path: 'VisualEffects.json',
          name: 'Visual Effects'
        }
      ]
    };
    
export  {catalogueData, tableObj};