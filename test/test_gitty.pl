:- use_module(library(git)).
<<<<<<< HEAD
:- use_module('../lib/trill_on_swish_gitty').
=======
:- use_module('../lib/gitty').
>>>>>>> 4549089e272f2fc68b49e3f76736e5d40e27ff1b

git_history(Dir, File, Limit, Objects) :-
	git_shortlog(Dir, ShortLog, [git_path(File),limit(Limit)]),
	maplist(git_content(Dir,File), ShortLog, Objects).

git_content(Dir, File, ShortLog, git{dir:Dir,file:File,commit:Commit,data:Data}) :-
	git_log_data(commit_hash, ShortLog, Commit),
	setup_call_cleanup(
	    git_open_file(Dir, File, Commit, In),
	    read_string(In, _, Data),
	    close(In)).

git_log(Dir, File) :-
	git_history(Dir, File, 100, Objects),
	append(_, [New,Old|_], Objects),
	(   data_diff(Old.data, New.data, Diffs),
	    maplist(udiff_string, Diffs, Strings)
	->  atomics_to_string(Strings, '\n', String),
	    format(user_error, '~s~n', String)
	;   gtrace,
	    data_diff(Old.data, New.data, Diffs),
	    maplist(udiff_string, Diffs, Strings)
	->  atomics_to_string(Strings, '\n', String),
	    format(user_error, '~s~n', String)
	).
