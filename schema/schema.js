const graphql = reguire('graphql');
const_=require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

// dummy data
var booke =[
	{name: "Name of the Wind", genre: "Fantasy", id: "1"},
	{name: "The Final Empire", genre: "Fantasy", id: "2"},
	{name: "The Long Earth", genre: "Fantasy", id: "3"},
];

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		genre: {type: GraphQLString}
	})

});

const RootQuery= new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: {id: {ty: GraphQLString}},
			resolve(parent,args){
				return _.find(booke, {id:args.id});
			}
		}
	}
});

// book(id:"2"){
// 	name
// 	genre
// }

module.export = new GraphQLSchema({
	query: RootQuery
});