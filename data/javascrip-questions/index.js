import { var_let_const_questions } from "./var-let-const";
import { map_filter_reduce_questions } from "./map-filter-reduce";
import { functions_questions } from "./functions";
import { closures_questions } from "./closures";
import { currying_questions } from "./currying";
import { objects_questions } from "./objects";
import { this_keyword_questions } from "./this-keyword";
import { call_bind_apply_questions } from "./call-bind-apply";
import { promises_questions } from "./promises";
import { debouncing_throttling_questions } from "./debouncing-throttling";
import { event_propagation_questions } from "./event-propagation";
import { event_loop_questions } from "./event-loop";
import { prototypes_questions } from "./prototypes";
import { class_constructors_questions } from "./class-constructors";
import { compose_pipe_questions } from "./compose-pipe";
import { error_handling_questions } from "./error-handling";


export const questions = {
    var_let_const: var_let_const_questions,
    map_filter_reduce: map_filter_reduce_questions,
    functions: functions_questions,
    closures: closures_questions,
    currying: currying_questions,
    objects: objects_questions,
    this_keyword: this_keyword_questions,
    call_bind_apply: call_bind_apply_questions,
    promises: promises_questions,
    debouncing_throttling: debouncing_throttling_questions,
    event_propagation: event_propagation_questions,
    event_loop: event_loop_questions,
    prototypes: prototypes_questions,
    class_constructors: class_constructors_questions,
    compose_pipe: compose_pipe_questions,
    error_handling: error_handling_questions,
}