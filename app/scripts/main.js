/**
 * Class: Person
 **/

var Person = Backbone.Model.extend({
  defaults: {
    name: "John Doe",
    age: 30,
    occupation: "worker"
  },

  validate: function(attrs){
    if (attrs.age < 0){
      return "Age must be positive";
    }
    if (!attrs.name) {
      return "Person must have a name";
    }
  },

  work: function() {
    return this.get('name') + ' is working';
  }

});

/**
 * Class: Counter
 **/

var Counter = Backbone.Model.extend({
  defaults: {
    count: 0
  },

  resetCount: function(){
    this.set('count',0);
    return this.get('count');
  },

  addOne: function(){
    this.set('count', this.get('count') + 1);
    return this.get('count');
  },

  subtractOne: function(){
    if (this.get('count') > 0) {
      this.set('count', this.get('count') - 1);
    }
    return this.get('count');
  }

});